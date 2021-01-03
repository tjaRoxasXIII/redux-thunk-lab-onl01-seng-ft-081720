// write your CatList component here
import React from 'react'

class CatList extends React.Component {

    catList = () => {
       return this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt={catPic.id}/>)
    }

    render() {
        return (
            <div>
                {this.catList()}
            </div>
        )
    }
}

export default CatList