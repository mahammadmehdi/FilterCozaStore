import React from 'react'
import "./index.scss"

function About() {
    return (
        <div id='aboutPage'>
            <div className='aboutHeader'><h1>ABOUT</h1></div>
            <div className='aboutOurStory'>
                <div className='ourStory'>
                    <h3 className='header'>Our Story</h3>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>

                       <p className='text'> Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>

                       <p className='text'> Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                </div>
                
                <div className='ourStoryBorder'><div className='ourStoryImage'>
                    <img className='imgStory' src="https://preview.colorlib.com/theme/cozastore/images/about-01.jpg.webp" alt="" />
                </div></div>
            </div>
            <div className='aboutOurMission'>
            
                <div className='ourMissionBorder'><div className='ourMissionImage'>
                    <img className='imgMission' src="https://preview.colorlib.com/theme/cozastore/images/about-02.jpg.webp" alt="" />
                </div></div>
                <div className='ourMission'>
                    <h3 className='header'>Our Mission</h3>
                    <p className='text'>Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>

                       <div className='missionSteve'>
                        <p className='text'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. </p>
                        <p className='text'>- Steve Job’s</p>
                       </div>
                </div>
               
            </div>
        </div>
    )
}

export default About