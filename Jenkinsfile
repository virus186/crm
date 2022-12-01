pipeline {
    agent any
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                bat 'npm i --force'
                bat 'npm run build'
            }
        }
        stage('Start') {
                    steps {
                        bat 'npm run start'
                    }
                }
               
    }
}
