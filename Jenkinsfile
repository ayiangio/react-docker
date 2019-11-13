pipeline {
  agent any
  stages {
    stage('Fetching Github'){
        steps{
            git 'https://github.com/ayiangio/cicdJenkins.git'
        }
    }
    stage('Install Dependency'){
        steps{
            nodejs('node') {
                sh "npm install"
            }
        }        
    }
    stage('Build'){
        steps{
            nodejs('node') {
                sh "npm run build"
            }
        }        
    }
    stage('Release App'){
        steps{
            sshagent(['nginx']) {
                    sh"ssh ubuntu@172.31.30.247 sudo rm -rf cicdJenkins/build/*"
                    sh "scp -r build ubuntu@172.31.30.247:cicdJenkins/"
            }   
        }        
    }
    stage('Deploy '){
        steps{
                sshagent(['nginx']) {
                    sh"ssh -o StrictHostKeyChecking=no ubuntu@172.31.30.247 sudo docker-compose -f cicdJenkins/docker-compose.yml up -d"
            }
        }
    }
  }
}
