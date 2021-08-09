import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <>
      <h1 className="about">This page was build by me, Laura Järventie.</h1>
      <p>
        I study in Helsinki Business College to became as fullstack web
        developer. This page is school project for my React course. I have used
        React.js and React.bootstrap library to build the front end. For the
        back end I used PhpStorm and database is saved in Heroku.
      </p>

      <h2>Contact me:</h2>
      {/*  
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
         
          <div class="form-group">
            <label for="subject">subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Message subject"
            ></input>
          </div>
          <div class="form-group">
            <label for="message">Message me</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message here"
            ></textarea>
          </div>
          <button type="submit">Send email</button>
       
        </div>
        */}
      <div>
        <Form method="POST" action="contact.php" className="form" id="form">
          <Form.Group>
            <Form.Label htmlFor="">Your email:</Form.Label>
            <Form.Control
              type="email"
              width="10px"
              name="email"
              id="email"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="">Subject:</Form.Label>
            <Form.Control
              width="10px"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="">Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              type="text"
              name="message"
              id="message"
              required
            />

            <Button type="submit" className="addbtn" value="Send data">
              Send mail
            </Button>
          </Form.Group>
        </Form>
      </div>
      {/* 
          <div class="form-group">
            <label for="name">Your name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="form-group">
            <label for="email">Your email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div class="form-group">
            <label for="message">Message me</label>

            <textarea
              input
              type="text"
              //value=""
              cols="30"
              rows="10"
              name="message"
              id="message"
            />
          </div>
          <button type="submit">Send message</button>
        </form>
      </>
    </span>
 */}
    </>
  );
};

export default About;
