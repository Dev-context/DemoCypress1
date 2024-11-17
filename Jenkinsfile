pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: '', description: '')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: '')
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Building') {
            echo    'Build The appication'
        }

        stage('Testing') {
            steps {
                bat     'npm i'
                bat     "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying Application') {
            echo    'Deploying application'
        }

        post {
            always {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true])
            }
        }
    }
}
