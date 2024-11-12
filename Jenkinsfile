pipeline {
    agent any
    stages {
        stage('Build Trivia') {
            steps {
                dir('trivia_game') {
                    echo 'Building trivia :)'
                    bat 'C:\Users\Agust\AppData\Local\Microsoft\WindowsApps\python.exe -m pydoc -w trivia_game'
                    bat 'dir'
                }
            }
        }
        stage('Build USQL') {
            steps {
                dir('USQL') {
                    echo 'Building USQL :)'
                    bat 'C:\Users\Agust\AppData\Local\Microsoft\WindowsApps\python.exe -m pydoc -w USQL'
                    bat 'dir'
                }
            }
        }
        stage('Archivar') {
            steps {
                archiveArtifacts allowEmptyArchive: true, artifacts: 'trivia_game/trivia_game.html'
                archiveArtifacts allowEmptyArchive: true, artifacts: 'USQL/USQL.html'
            }
        }
    }
}
