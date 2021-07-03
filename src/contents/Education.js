import React, { Component } from 'react';
import Widecard from '../Component/Wildcard';;
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="B.Tech Computer Science and Engineering" where="Trident Academy of Technology" from="July 2016" to="july 2020"/>
<Widecard title="HSE" where="Maharishi Collage Of Natural Law" from="2014" to="2016"/>
<Widecard title="BSE" where="Arteswar High School,Kendrapara" from="2013" to="2014"/>
</div>
)
}
}
export default Education