// WORKING WITH THE ADD BUTTON

const addFlashBtn = document.querySelector("#add-card-btn"); //add flashcard button

const modal = document.querySelector("#add-card-modal"); //modal

const closeModal = document.querySelector(".fa-xmark"); //CLOSING THE MODAL

const saveBtn = document.querySelector("#save-btn"); //MODAL SAVE BUTTON

const inputQues = document.querySelector(".input-q") //INPUT QUESTION

const inputAns = document.querySelector(".input-a") //INPUT ANSWER

const errorMessage = document.querySelector("#error") //ERROR MESSAGE IN MODAL

const cardList = document.querySelector(".cards-list"); //CARD LIST

const showHideBtn = document.querySelector(".show-hide-answer-btn") //show hide button

const deleteCardBtn = document.querySelector(".delete-btn"); //delete card  button

const editCardBtn = document.querySelector(".edit-btn");

let currentEditCard = null;


//ADDING A MODAL
addFlashBtn.addEventListener("click",()=>{

    modal.classList.remove("hide");
})


//VIEWING ANSWERS
cardList.addEventListener("click", (e) => {
    if (e.target.classList.contains("show-hide-answer-btn")) {
        showHideButton(e);
    }
    if (e.target.classList.contains("delete-btn") || e.target.closest(".delete-btn")){
        console.log("delete button")
        deleteCard(e);
    }

    if (e.target.classList.contains("edit-btn") || e.target.closest(".edit-btn")){
        console.log("edit button")
        editCard(e)
    }
});





//CLOSING A MODAL
closeModal.addEventListener("click",()=>{
    modal.classList.add("hide");
})

//CREATING ONE

saveBtn.addEventListener("click", () => {
    // get the question and the answer
    addingModalFeature();
});






function addingModalFeature(){
    let question = inputQues.value;
    let answer = inputAns.value;

    if (question !== "" && answer !== "") {

        if (currentEditCard){

            currentEditCard.querySelector(".que-div + .que-div").innerHTML = question; //modifyying the change here 
            currentEditCard.querySelector(".ans-div").innerHTML = answer; //modifying the change here

        }

        else{
            addingCard(question, answer);
        }

        // addingCard(question, answer);
        modal.classList.add("hide");
        // Clear the inputs after saving
        inputQues.value = '';
        inputAns.value = '';
        errorMessage.classList.add("hide");
    } else {
        console.log("Nothing was added");
        errorMessage.classList.remove("hide");
    }
}




//TO ADD A CARD

function addingCard(question, answer){
    // <div class="card"> <!--One of the flashcards-->
    //     <p class="que-div">Questions:</p>
    //     <p class="ans-div">Answers</p>
    //     <button class="show-hide-answer-btn">Show/Hide</button>
    //     <button class="edit-btn"><i class="fa-solid fa-user-pen"></i></button>
    //     <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    // </div>

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML=`
    <p class="que-div">Questions:</p>
    <p class="que-div">${question}</p>
    <p class="ans-div hide">${answer}</p>
    <button class="show-hide-answer-btn">Show/Hide</button>
    <button class="edit-btn"><i class="fa-solid fa-user-pen"></i></button>
    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    `

    cardList.appendChild(card);

}

function showHideButton(e){
    const card = e.target.closest(".card");
    const answer = card.querySelector(".ans-div");
    if (answer) {
        answer.classList.toggle("hide")
    }
}


function deleteCard(e){
    const card = e.target.closest(".card");
    if (card){
        card.remove();
    }
}

function editCard(e){
    const card = e.target.closest(".card")
    const editQuestion = card.querySelector(".que-div + .que-div").innerHTML;
    const editAnswer = card.querySelector(".ans-div").innerHTML;
    

    // Open the modal and populate the fields
    modal.classList.remove("hide");
    inputQues.value = editQuestion;
    inputAns.value = editAnswer;

    let questionEdit = inputQues;
    let answerEdit = inputAns;

    currentEditCard = card;
    

}

