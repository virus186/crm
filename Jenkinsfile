pipeline {
    agent any
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Start') {
                    steps {
                        bat 'npm run start'
                    }
                }
               
    }
}
