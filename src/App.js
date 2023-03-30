import React from 'react';
import ChatBot from 'react-simple-chatbot';

function App() {


  const steps = [

    {

      id: "Greet",

      message: "Hi, Thank you for contacting us. We are sorry for your inconvenience",

      trigger: "Done",

    },
    {

      id: "Done",

      message: "Please let us know your name!",

      trigger: "waiting1",

    },
   

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "food",

          label: "Food Quality 🍔",

          trigger: "food",

        },

        { value: "staff", label: "Staff 👨‍🍳", trigger: "staff" },
        { value: "cleaning", label: "Premises Cleanliness 🧹🧺", trigger: "cleaning" },
        { value: "managment", label: "Managment 💼", trigger: "managment" },

      ],

    },

    {

      id: "staff",

      message:

        "Plese tell us our staff issue, Our team will resolve your issue ASAP",

      trigger: 'waiting2'

    },

    {

      id: "cleaning",

      message:

      "Plese tell us our cleaning issue, Our team will resolve your issue ASAP",

      trigger: 'waiting2'

    },
    {

      id: "managment",

      message:

      "Plese tell us our managment issue, Our team will resolve your issue ASAP",

      trigger: 'waiting2'

    },
    {

      id: "food",

      message:

      "Plese tell us our food issue, Our team will resolve your issue ASAP",

      trigger: 'waiting2'

    },
    {

      id: "waiting2",

      user: true,

      trigger: "thanks",

    },
    {

      id: "thanks",

      message:

      "Your complain has been registered, Our team will resolve your issue ASAP. Thank you and Have a nice day",

      end: true

    },
    
    

  ]; 

  return (
    <>
      <div>
        <ChatBot         
        steps={steps}  />
      </div>
        
      
    </>
  );

}

export default App;
