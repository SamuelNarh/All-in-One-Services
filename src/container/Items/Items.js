import React from "react";
import './Items.css'
import image1 from './1.jpg';
import image2 from './2.jpg';

const Items =()=>{
    return(
        <section className='flex flex-wrap justify-center'>
        <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <img src={image1} alt="" className="db w-100 br2 br--top" />
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                        <div className="dtc">
                            <h1 className="f5 f4-ns mv0 tc">Range Rover</h1>
                        </div>
                    </div>
                    <div style={{textAlign:'center',padding:'10px'}}>
                        <span>greatr</span><span>1</span><span>less</span>
                    </div>
                    <div className='button'>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
        </div>
        <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <img src={image1} alt="" className="db w-100 br2 br--top" />
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                        <div className="dtc">
                            <h1 className="f5 f4-ns mv0 tc">Range Rover</h1>
                        </div>
                    </div>
                    <div style={{textAlign:'center',padding:'10px'}}>
                        <span>greatr</span><span>1</span><span>less</span>
                    </div>
                    <div className='button'>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
        </div>
        <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <img src={image2} alt="" className="db w-100 br2 br--top" />
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                        <div className="dtc">
                            <h1 className="f5 f4-ns mv0 tc">Range Rover</h1>
                        </div>
                    </div>
                    <div style={{textAlign:'center',padding:'10px'}}>
                        <span>greatr</span><span className='qty'>1</span><span>less</span>
                    </div>
                    <div className='button'>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
        </div>
        <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <img src={image1} alt="" className="db w-100 br2 br--top" />
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                        <div className="dtc">
                            <h1 className="f5 f4-ns mv0 tc">Range Rover</h1>
                        </div>
                    </div>
                    <div style={{textAlign:'center',padding:'10px'}}>
                        <span>greatr</span><span>1</span><span>less</span>
                    </div>
                    <div className='button'>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
        </div>
    </section>
    )
}

export default Items