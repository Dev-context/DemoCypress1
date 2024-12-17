pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/*', description: '')
        string(name: 'BROWSER', defaultValue: 'chrome', description: 'Browser')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script{
                    docker.image('cypress/included:12.0.0').inside{
                        sh 'npm install'
                    }
                }
                
            }
        }

        stage('Run Cypress Tests') {
            steps {
                docker.image('cypress/included:12.0.0').inside {
                        sh 'npx cypress run --browser "$BROWSER" --headless --spec "$SPEC"'
                    } 
            }
        }

        stage('Deploying Application') {
            steps {
                echo 'Deploying application'
            }
        }
    }
}
