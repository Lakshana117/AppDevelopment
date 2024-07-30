import React from 'react'

const Contact = () => {
  return (
    <section id="contact-form">
        
    <div class="container shadow-lg p-3 mt-5 py-5 rounded text-center   ">
       <div class="row ">
            <h1 class="text-center">Contact Us.</h1>
           <div class="col-md-6 mt-5  ">
              
               <div class="card   mt-3">
                   <div class="card-body ">
                        
                       <form action="/register" method="POST"autocomplete="off">
  
                       <div class="form-floating">
                           <input type="text" class="form-control" name="fullname"   placeholder="Full Name"
                                required/>
                           <label for="floatingInputGroup1">Fullname</label>
                       </div>
 
                       <div class="form-floating mt-3">
                           <input type="email" class="form-control" name="email" placeholder="Email" required/>
                           <label for="floatingInputGroup1">Email</label>
                       </div>

                       <div class="form-floating mt-3">
                           <input type="text" class="form-control" name="address" placeholder="Address" required/>
                           <label for="floatingInputGroup1">Address</label>
                       </div>
 
                       <button type="submit" class="btn btn-warning fw-bold fs-5 text-center mt-4 ">Contact</button>
                        
                       </form>
  
                   </div>
  
               </div>
               </div>
  
               <div class="col-md-6 mt-3">
                   <img src="https://imgs.search.brave.com/HjQlAubVV1AC6EeT1iTY_DLnqr5XYxP6SOdJMpkOkYU/rs:fit:1090:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/X0YxSkxDX0VTSldf/TFhacjREQzBRSGFE/TyZwaWQ9QXBp" alt="" class="mt-5 img-fluid"   />

               </div>
           </div>
       </div>
  
  </section>
  )
}

export default Contact