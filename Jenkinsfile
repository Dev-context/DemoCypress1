pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/*', description: '')
        string(name: 'BROWSER', defaultValue: 'chrome', description: 'Browser')
    }

    stages {
        stage('Building') {
            steps {
                sh 'npm install'
            }
        }

        stage('Testing') {
            steps {
                sh 'npx cypress run --browser "$BROWSER" --headless --spec "$SPEC"'
            }
        }

        stage('Deploying Application') {
            steps {
                echo 'Deploying application'
            }
        }
    }
}
