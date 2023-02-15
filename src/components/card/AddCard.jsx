import React from 'react'

export default function AddCard() {
  return (
    <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Add your card</h3>
    {/* <h4>Contact us today, and get reply with in 24 hours!</h4> */}
    <fieldset>
      <input placeholder="Card's name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <div class="input-group">
  <input placeholder="Add price" type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
</div>
    <fieldset>
      <input placeholder="Add URL img" type="url" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
    <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Good</a></li>
    <li><a class="dropdown-item" href="#">Average action</a></li>
    <li><a class="dropdown-item" href="#">Bed</a></li>
  </ul>
</div>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
  )
}
