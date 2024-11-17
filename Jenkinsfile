pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/Tests/*.js', description: '')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: '')
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
                bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
            }
        }

        stage('Deploying Application') {
            steps {
                echo 'Deploying application'
            }
        }
    }
}
