node {
    stage('Fetching Github'){
        git 'https://github.com/ayiangio/cicdJenkins.git'
    }
    stage('Install Dependency'){
        nodejs('node') {
            sh "npm install"
        }
    }
    stage('Build'){
        nodejs('node') {
            sh "npm run build"
        }
    }
    stage('Release App'){
        sshagent(['nginx']) {
            sh"ssh ubuntu@172.31.30.247 sudo rm -rf cicdJenkins/build/*"
            sh "scp -r build ubuntu@172.31.30.247:cicdJenkins/"
       }
    }
    stage('Deploy '){
        def docker='sudo docker-compose -f cicdJenkins/docker-compose.yml up -d'
        sshagent(['nginx']) {
            sh"ssh -o StrictHostKeyChecking=no ubuntu@172.31.30.247 ${docker}"
       }
    }
}