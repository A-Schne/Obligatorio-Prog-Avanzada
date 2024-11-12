pipeline{
    agent any
    stages{
        stage('Build trivia'){
            steps {
                dir('trivia_game') {
                    echo 'building trivia :)'
                    sh 'python3 -m pydoc -w trivia_game'
                    sh 'ls -l'
                }
            }
        }
        stage('Build USQL'){
            steps {
                dir('USQL') {
                    echo 'building USQL :)'
                    sh 'python3 -m pydoc -w USQL'
                    sh 'ls -l'
                }
            }
        }
        stage('Archivar'){
            steps{
                archiveArtifacts allowEmptyArchive: true, artifacts: 'trivia_game/trivia_game.html'
                archiveArtifacts allowEmptyArchive: true, artifacts: 'USQL/USQL.html'
            }
            
        }
    }
}