import React from 'react';
import { Form } from 'react-bootstrap';
import { Tabs,Tab } from 'react-bootstrap';
import { Button,Modal } from 'react-bootstrap';
import {Createnewgroup,Createnewconversation} from './newcoversationmodal';
import { Dropdown } from 'react-bootstrap';
import $ from 'jquery';
export class Loggerbody extends React.Component {
    constructor(props){
    super(props);
    this.state = {
         activechat : [{"id":"1","name":"arjun mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
        {"id":"2","name":"suresh mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
        {"id":"3","name":"amrit mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
        {"id":"4","name":"lokesh mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
      ],
      archivechat : [{"id":"1","name":"mohit mishra","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
      {"id":"2","name":"shivam mishra1","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
      {"id":"3","name":"prit mishra2","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"},
      {"id":"4","name":"raju mishra3","status":"i am good","status":"i am good","time":"10am","img":"assets/adminsection/dist/img/user2-160x160.jpg"}
    ],
      selected: "",
      activechatsearch:null,
      archivechatsearch:null
      };
    }
   
    searchActivechat=(event)=>{
      
        let keyword = event.target.value;
        console.log('search is actice',keyword)
        this.setState({activechatsearch:keyword})
      }
      searchArchivechat=(event)=>{
        let keyword = event.target.value;
        this.setState({archivechatsearch:keyword})
      }

    // ++++++++++
      changeColor = id => {
        this.setState({ selected: id });
        console.log('new section',id)
      };
    // For open close right nav bar  
     openNav = () => {
         alert('open nav')
        document.getElementById("mySidenav").style.width = "250px";
      }
      
       closeNav = () => {
        alert('close nav')
        document.getElementById("mySidenav").style.width = "0";
      }
      


      render() {
    
        const { selected, activechat, archivechat } = this.state;
        $(document).ready(function(){
            $(".slideBtn").click(function(){    
              if($("#sidenav").width() == 0){      
                  document.getElementById("sidenav").style.width = "250px";
                  document.getElementById("main").style.paddingRight = "250px";
                //   document.getElementById("slidebtn").style.paddingRight = "250px";
                  document.getElementById("slidebtn").style.paddingRight = "0px";
              }else{
                  document.getElementById("sidenav").style.width = "0";
                  document.getElementById("main").style.paddingRight = "0";
                  document.getElementById("slidebtn").style.paddingRight = "0";
              }
            });
          });
       
        console.log(selected);
        return (
            <div className="content-wrapper">
              {/* ****************** */}
              <div className="conversion_body">
                  <div className="row p-4 conversion_bodyinner" >
                      <div className="col-3 conversion_body1">
                      <div className="row">
                          <div className="col-6 my-auto pl-3" ><h5>Conversations</h5></div>
                          <div className="col-6 text-right">
                          {/* <i className="fa fa-users chaticon" aria-hidden="true"></i> */}
                          <Createnewgroup checktest="testing" />
                          <Createnewconversation /> 
                          {/* <i className="fa fa-comment chaticon" aria-hidden="true"></i> */}
                          </div>
                          {/* <div className="col-12 mt-1">
                             <Form>
                                <Form.Group controlId="formBasicEmail">
                                   <Form.Control type="text" placeholder="Search" className="serchInput"  onChange={(e)=>this.searchActivechat(e)}/>
                                 </Form.Group>
                             </Form>
                          </div> */}
                          <div className="col-12 mt-1 ml-0 mr-0 pl-0 pr-0">
                          <Tabs defaultActiveKey="activechat" id="uncontrolled-tab-example">
                          <Tab eventKey="activechat" title="Active Chat" className="col-12" tabClassName="asidetabchat">
                          <Form>
                                <Form.Group controlId="formBasicEmail" className="mt-3">
                                   <Form.Control type="text" placeholder="Search" className="serchInput"  onChange={(e)=>this.searchActivechat(e)}/>
                                 </Form.Group>
                                </Form>

                                {activechat.filter((data)=>{
                                            if(this.state.activechatsearch == null)
                                                return data
                                            else if(data.name.toLowerCase().includes(this.state.activechatsearch.toLowerCase())){
                                                return data
                                            }
                                        }).map(({ name, id, status,time, img}) => (
                                     <div  onClick={() => this.changeColor(id)}  className={ "row " + "loggerinnerbody " + (selected == id ? "blackButton" : "" )  }>
                                           {/*  */}
                                           <div  className="col-9 pt-2">
                                                <div className="logger_sidetab1">
                                                <img src={img} className="img-circle logger_singleuserimg"></img>
                                                </div>
                                                <div  className="logger_sidetab2">
                                                <h6 className="logger_chatusername">{name}</h6>
                                                <p className="logger_chatusertagline">{status}</p>
                                                </div>
                                            </div>
                                            <div  className="col-3">
                                                <div className="logger_chatuserlogtime text-right"><p  className="logger_chartime">{time}</p></div>
                                                <div className="logger_chatuserdropdown text-right">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="logger_dropdownbtn">
                                                        <p className="logger_drptext">...</p>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Archive Chat</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                </div>
                                            </div>
                                           {/*  */}
                                     </div>
                                ))}
                           </Tab>
                           <Tab eventKey="archivechat" title="Archive Chat" className="col-12" tabClassName="asidetabchat">
                           <Form>
                                <Form.Group controlId="formBasicEmail" className="mt-3">
                                   <Form.Control type="text" placeholder="Search" className="serchInput"  onChange={(e)=>this.searchArchivechat(e)}/>
                                 </Form.Group>
                             </Form>
                                                
                                                    {archivechat.filter((data)=>{
                                                if(this.state.archivechatsearch == null)
                                                    return data
                                                else if(data.name.toLowerCase().includes(this.state.archivechatsearch.toLowerCase())){
                                                    return data
                                                }
                                            }).map(({ name, id, status,time, img}) => (
                                     <div  onClick={() => this.changeColor(id)}  className={ "row " + "loggerinnerbody " + (selected == id ? "blackButton" : "" )  }>
                                           {/*  */}
                                           <div  className="col-9 pt-2">
                                                <div className="logger_sidetab1">
                                                <img src={img} className="img-circle logger_singleuserimg"></img>
                                                </div>
                                                <div  className="logger_sidetab2">
                                                <h6 className="logger_chatusername">{name}</h6>
                                                <p className="logger_chatusertagline">{status}</p>
                                                </div>
                                            </div>
                                            <div  className="col-3">
                                                <div className="logger_chatuserlogtime text-right"><p  className="logger_chartime">{time}</p></div>
                                                <div className="logger_chatuserdropdown text-right">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="logger_dropdownbtn">
                                                        <p className="logger_drptext">...</p>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Unarchive Chat</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                </div>
                                            </div>
                                           {/*  */}
                                     </div>
                                ))}
                          </Tab>
                        </Tabs>
                          </div>
                      </div>
                      </div>
                      <div className="col-9 conversion_body2 text-center">
                          {/* left side bar bio detail*/}
                          <div id="sidenav" className="sidenav">
                                <div className="row">
                                    <div className="col-12 sidenavinner1">
                                        <h4 className="sidenav_abouttag">About</h4>
                                        <img src="assets/adminsection/dist/img/user2-160x160.jpg" className="img-circle sidenavImg"></img>
                                        <p className="sidenav_status"><i className="fa fa-circle mr-1 sidenav_statusdot" aria-hidden="true"></i>Online</p>
                                    </div>
                                    <div className="col-12 sidenavinner1">
                                        <h6 className="sidenav_bioheading">Bio</h6>
                                        <p className="sidenav_biotext">No bio added yet...</p>
                                    </div>
                                    <div className="col-12 sidenavinner1">
                                        <h6 className="sidenav_bioheading">Phone</h6>
                                        <p className="sidenav_biotext">No phone added yet...</p>
                                    </div>
                                    <div className="col-12 sidenavinner1">
                                        <h6 className="sidenav_bioheading">Email</h6>
                                        <p className="sidenav_biotext">locroom@gmail.com</p>
                                    </div>
                                    <div className="col-12 sidenavinner1">
                                        <h6 className="sidenav_bioheading">Media</h6>
                                        <p className="sidenav_biotext">No media shared yet...</p>
                                    </div>
                                    <div className="col-12 sidenavinner1">
                                        <h6 className="sidenav_bioheading">Common Groups - <span>1</span></h6>
                                        <p className="sidenav_biotext"><i class="fa fa-users mr-3" aria-hidden="true"></i><span>test group</span></p>
                                        <p className="sidenav_biotext"><i class="fa fa-users mr-3" aria-hidden="true"></i><span>test group</span></p>
                                    </div>
                                </div>
                         </div>
                          {/*Center body */}
                           <div id="main">
                               <section className="sidenav_bodysection1 pt-2 pb-2">
                                 <div className="row">
                                 <div className="col-8 text-left pt-2 pl-2">
                                  <div className="activeuser">
                                    <img src="assets/adminsection/dist/img/user2-160x160.jpg" className="img-circle activeuserimg"></img>
                                  </div>
                                 <div  className="activeuser_detail">
                                    <h6 className="activeusername">amit</h6>
                                    <p className="activeuser_tagline">online</p>
                                 </div>
                                    </div>
                                    <div className="col-4 text-right my-auto">
                                        <h6  id="slidebtn" className="slideBtn"><i class="fa fa-cog" aria-hidden="true"></i></h6>
                                    </div>
                                 </div>
                             </section>
                             <section className="">
                             <ul id="chat">
                                        <li class="you">
                                        <div class="entete">
                                            <span class="status green"></span>
                                            <h2>Vincent</h2>
                                            <h3>10:12AM, Today</h3>
                                        </div>
                                        <div class="triangle"></div>
                                        <div class="message">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                        </div>
                                    </li>
                                    <li class="you">
                                        <div class="entete">
                                            <span class="status green"></span>
                                            <h2>Vincent</h2>
                                            <h3>10:12AM, Today</h3>
                                        </div>
                                        <div class="triangle"></div>
                                        <div class="message">
                                            Lorem.
                                        </div>
                                    </li>
                                    <li class="me">
                                        <div class="entete">
                                            <h3>10:12AM, Today</h3>
                                            <h2>Vincent</h2>
                                            <span class="status blue"></span>
                                        </div>
                                        <div class="triangle"></div>
                                        <div class="message">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                        </div>
                                    </li>
                                    <li class="me">
                                        <div class="entete">
                                            <h3>10:12AM, Today</h3>
                                            <h2>Vincent</h2>
                                            <span class="status blue"></span>
                                        </div>
                                        <div class="triangle"></div>
                                        <div class="message">
                                            OK
                                        </div>
                                    </li>
                                    <li class="you">
                                        <div class="entete">
                                            <span class="status green"></span>
                                            <h2>Vincent</h2>
                                            <h3>10:12AM, Today</h3>
                                        </div>
                                        <div class="triangle"></div>
                                        <div class="message">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                        </div>
                                    </li>
                                    <li class="me">
                                        <div class="entete">
                                            <h3>10:12AM, Today</h3>
                                            <h2>Vincent</h2>
                                            <span class="status blue"></span>
                                        </div>
                                        <div class="triangle"></div>
                                        <div class="message">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                        </div>
                                    </li>
                                    <li class="me">
                                        <div class="entete">
                                            <h3>10:12AM, Today</h3>
                                            <h2>Vincent</h2>
                                            <span class="status blue"></span>
                                        </div>
                                        <div class="triangle"></div>
                                        <div class="message">
                                            OK
                                        </div>
                                    </li>
                                    </ul>
                                      
                             </section>
                                <section className="sidenavbot_footer">
                                       <div >
                                       <Form className="d-flex">
                                            <Form.Group controlId="inputtextchat" className="typetextbox1 flex-fill">
                                                <Form.Control type="text" placeholder="Enter text" className="textboxinput" />
                                            </Form.Group>
                                            <Button variant="" type="submit" className="sendbtn">
                                            <i class="fa fa-paperclip " aria-hidden="true"></i>
                                           </Button>
                                            <Button variant="" type="submit" className="sendbtn">
                                            <i class="fa fa-paper-plane " aria-hidden="true"></i>
                                            </Button>
                                         </Form>
                                       </div>
                             </section>
                           </div>
                          {/* testing */}   
                     </div>
                  </div>
              </div>
              {/* **************** */}
              {/* for model code */}
               {/* <Logmodeltest /> */}
              {/* for model code */}
              </div>
          );
      }
}
export default Loggerbody ;

