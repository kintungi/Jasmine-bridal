import React, { useRef, useState } from 'react'
import { getFirestore, collection, doc, getDoc, getDocs, addDoc, serverTimestamp, deleteDoc } from "firebase/firestore"
import {initializeApp} from "firebase/app"
import { firebaseConfig } from "../lib/firebase"



//Initializing firestore


function Form() {
  initializeApp(firebaseConfig)
  const db = getFirestore()

  //Reference to collection
  const contactRef = collection(db, "ContactForms")
  // const contactRef = collection(db, "contact-form")

  const [name, setName] = useState("")

  const nameInput = useRef()
  const emailInput = useRef()
  const messageInput = useRef()
  
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  // console.log(name, email, message)


  function submitForm(e) {
    e.preventDefault();

    if (emailInput !== "" && messageInput !== "" && nameInput !== "" ) {
      const formData = {
        name,
        email,
        message,
        createdAt: serverTimestamp()
      }
  
      //Adding data to firestore
      addDoc(contactRef, formData).then(() => {
        //  console.log(formData,"form submitted")
        messageInput.current.value = ""
        nameInput.current.value = ""
        emailInput.current.value = ""
      }).catch(err => console.log(err.message))
      // console.log(form)
  
    }
    

  }

  // //The code below is for testing and learning purposes only you can delete

  // async function readDoc() {
  //   const docRef = doc(db, "Users", "002")

  // const user = await getDoc(docRef).then(
  //   user => console.log(user.data(), "user data")
  // ).catch(e => console.log(e.message))

  
  // }

  // readDoc()

  // async function readCollection() {
  //   const colRef = collection(db, "Users")

  //   const colData = await getDocs(colRef).then(
  //     (colData) => colData.forEach(user => console.log(user.data(), "Getting users")))
  //   .catch(e => console.log(e.message, "Getting collection"))
  // }

  // readCollection()

  return (
    <form onSubmit={submitForm} className='form text-defaultText' name="contact" >
    <div className='name mb-32'>
      <label className=' text-body' htmlFor="name">Full name</label>
      <input required ref={nameInput} onChange={(e) => setName(e.target.value)} className='mt-8 border-2 block rounded-[8px] py-[12px] h-48 border-woody pl-[20px] w-[320px]' id='name' placeholder='Full name' type="text" name='name'/>
      <small className='mt-4 invisible'>message</small>
    </div>
    <div className='name mb-32'>
      <label className=' text-body' htmlFor="email">Email</label>
      <input required ref={emailInput} onChange={(e) => setEmail(e.target.value)} className='mt-8 border-2 block rounded-[8px] h-48 py-[12px] border-woody pl-[20px] w-[320px]' id='email' placeholder='Email' type="email" name="email"/>
      <small className='mt-4 invisible'>message</small>
    </div>
    <div className='name mb-32'>
      <label className=' text-body' htmlFor="message">Message</label>
      <textarea required ref={messageInput} onChange={(e) => setMessage(e.target.value)} className='resize-y mt-8 border-2 block rounded-[8px] min-h-[140px] py-[12px] border-woody pl-[20px] w-[320px]' id='message' placeholder='Message' type="text" name="message"></textarea>
      <small className='mt-4 invisible'>message</small>
    </div>

    <button  type="submit" className='h-48 bg-woody text-white w-[320px] rounded-[999px] font-medium uppercase'>Send</button>
    
    </form>
  )
}

export default Form
