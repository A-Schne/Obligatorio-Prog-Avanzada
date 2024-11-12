pipeline{
    agent any
    stages{
        stage('Build trivia'){
            steps {
                echo 'building trivia :)'
                sh 'python -m pydoc -w trivia_game/trivia_game'
            }
        }
        stage('Build USQL'){
            steps {
                echo 'building USQL :)'
                sh 'python -m pydoc -w USQL/USQL'
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