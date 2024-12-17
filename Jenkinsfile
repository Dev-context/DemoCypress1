pipeline {
    agent {
        docker {
            image 'cypress/included:12.0.0'
            args  '-u root:root'  // Run as root if necessary
        },

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/*', description: 'Test spec file pattern')
        string(name: 'BROWSER', defaultValue: 'chrome', description: 'Browser for Cypress tests')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('cypress/included:12.0.0').inside {
                        // Instalar as dependências do projeto
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Rodar os testes do Cypress com as variáveis de parâmetro
                    docker.image('cypress/included:12.0.0').inside {
                        sh ''' 
                            npx cypress run \
                            --browser "$BROWSER" \
                            --headless \
                            --spec "$SPEC"
                        '''
                    }
                }
            }
        }

        stage('Deploying Application') {
            steps {
                echo 'Deploying application'
                // Aqui você pode adicionar comandos para o deploy da sua aplicação
            }
        }
    }
}
