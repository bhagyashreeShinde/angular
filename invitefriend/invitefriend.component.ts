import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-invitefriend',
  templateUrl: './invitefriend.component.html',
  styleUrls: ['./invitefriend.component.css']
})
export class InvitefriendComponent implements OnInit {
 
  inviteFriendsForm: FormGroup;
  post:any;                     // A property for our submitted form

  constructor(private fb: FormBuilder) {
    this.inviteFriendsForm = fb.group({
      'firstName' : '',
      'surName' : '',
      'email' : '',
      'inviteFormArray' :this.fb.array([])
    });

   }

  ngOnInit() {
    //this.createForm()
  }

  // createForm(){
  //   return this.fb({
  //   firstName:'',
  //   surName:'',
  //   email:'',
  // })

  
  addFriend()
  {

  var addFriendlist = [];
  console.log("FORMGRP" ,this.inviteFriendsForm)

  const control  = (<FormArray>this.inviteFriendsForm.get('inviteFormArray')).controls;
  control.push(this.inviteFriendsForm);


  // const firstName = document.getElementById('firstName').value;
	// const surName = document.getElementById('surName').value;
	// const email = document.getElementById('email').value;
	// const userData = {
	// firstName: this.inviteFriendsForm.get('firstName').value,
	// surName: this.inviteFriendsForm.get('surName').value,
	// email: this.inviteFriendsForm.get('email').value
	// };
	addFriendlist.push(this.inviteFriendsForm);

	//for (var i = 0; i < addFriendlist.length; i++) {
	// var addfriendData = '<ul>'+
	// 					'<li><label class=\'invitefriend-section-friendlist-label\'>Name</label>' +
	// 					'<input id=\'invitefriend-section-friendlist-name\' type=\'text\' value=\'' + addFriendlist[i].firstName + 
	// 					'\' class=\'invitefriend-section-friendlist-input\'></li><li>' +
	// 					'<label class=\'invitefriend-section-friendlist-label\'>Surname</label>'+
	// 					'<input id=\'invitefriend-section-friendlist-surname\' type=\'text\' value=\'' + addFriendlist[i].surName +
	// 					'\' class=\'invitefriend-section-friendlist-input\'></li><li>'+
	// 					'<label class=\'invitefriend-section-friendlist-label\'>Email Address</label>' +
	// 					'<input id=\'invitefriend-section-friendlist-email\' type=\'text\' value=\'' + addFriendlist[i].email + '\' class=\'invitefriend-section-friendlist-input\'></li><li>'+
	// 					'<div><label class=\'invitefriend-section-friendlist-label\'><img src=\'image/dustbin.png\'>' +
	// 					'<a href=\'javascript:void(0)\' onClick=\'GrilledPrawn.removeFriend(' + i + ');\'>Remove</a></label></div></li></ul>';
	// //var addfriendData = "<div class='add-data'><form><ul><li><input type='text' id='fName' value=" + addFriendlist[i].firstName + "></li><li><input type='text' id='lName' value=" + addFriendlist[i].surName + "></li><li><input type='text' id='email1' value=" + addFriendlist[i].email + "> </li> <li><a href='javascript::void(0)' onClick='GrilledPrawn.removeFriend(" + i + ");'>Remove</a></li> </ul></form></div>"
	// // var newFood = "<a href='#' onClick='removeRecord(" + i + ");'>X</a> " + foodList[i] + " <br>";
	// }

	// document.getElementById('invitefriend-section-friendlist').innerHTML += addfriendData;
	// document.getElementById('firstName').value = '';
	// document.getElementById('surName').value = '';
	// document.getElementById('email').value = '';

//};
 // }
}
}