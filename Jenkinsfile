pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/*', description: '')
        string(name: 'BROWSER', defaultValue: 'chrome', description: 'Broser')
    }

    stages {
        stage('Building') {
            steps {
                echo 'Build The appication'
            }
        }

        stage('Testing') {
            steps {
                bat 'npm i'
                bat 'npx cypress run --browser ${BROWSER} --headless --spec ${SPEC}'
            }
        }

        stage('Deploying Application') {
            steps {
                echo 'Deploying application'
            }
        }
    }
    post {
        always {
            echo 'I will always say Hello again!'
        }
    }
}
