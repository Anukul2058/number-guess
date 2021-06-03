// selectors
let submit_button = document.getElementById('button');
let last_guess = document.getElementById('last-guess')
let guess_remaining = document.getElementById('guess-remaining')
let big_container = document.querySelector('.big-container')
var initial_num = 6
guess_remaining.innerText = initial_num


let scret_number = Math.floor(Math.random() * 21);
console.log(scret_number);

// creating restart button
let restart_button = document.createElement('button')
restart_button.className = 'restart-button'
restart_button.innerText = 'Restart'





// event listener



// functions
function add() {

    let guess_number = document.getElementById('text-area').value;
    console.log(guess_number);
    var diff = scret_number - guess_number
    var diff = Math.abs(diff);

    if (guess_number == '') {
        alert('No number is entered.')
    }



    if (guess_number == scret_number) {

        var winner_div = document.createElement('div')
        winner_div.className = 'winner'
        winner_div.innerText = 'You guessed it right.Congratulations'
        big_container.appendChild(winner_div);
        submit_button.replaceWith(restart_button);


        restart_button.addEventListener('click', function restart() {
            restart_button.replaceWith(submit_button);
            document.getElementById('text-area').value = ''
            winner_div.remove();
            initial_num = 6
            guess_remaining.innerText = initial_num
            last_guess.innerText = ''
            scret_number = Math.floor(Math.random() * 21);
            console.log('new number is:',scret_number);
            


        });


    }


    if (guess_number != scret_number && guess_number != '') {

        initial_num = initial_num - 1;
        guess_remaining.innerText = initial_num
        if (initial_num != 0) {

            if (diff < 3) {
                var wrong_div = document.createElement('div');
                wrong_div.className = 'wrong'
                wrong_div.innerText = 'Opps! Very close. Please try again.'
                big_container.appendChild(wrong_div);

            }
            else {
                var wrong_div = document.createElement('div');
                wrong_div.className = 'wrong'
                wrong_div.innerText = 'Try Again'
                big_container.appendChild(wrong_div);

            }


            document.getElementById('text-area').value = ''
            document.getElementById('text-area').addEventListener('click', function hatau() {
                wrong_div.remove();
            })
        }
        else {
            var gameover_div = document.createElement('div');
            gameover_div.className = 'gameover'
            gameover_div.innerText = 'GAMEOVER'
            big_container.appendChild(gameover_div);
            submit_button.replaceWith(restart_button);


            restart_button.addEventListener('click', function restart() {
                restart_button.replaceWith(submit_button);
                document.getElementById('text-area').value = ''
                gameover_div.remove();
                initial_num = 6
                guess_remaining.innerText = initial_num
                last_guess.innerText = ''
            });





        }







    }
    last_guess.innerText = guess_number


}



