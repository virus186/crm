pipeline {
    agent any
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                bat 'npm i --force'
            }
        }
        stage('Start') {
                    steps {
                        bat 'npm run dev'
                    }
                }
               
    }
}
