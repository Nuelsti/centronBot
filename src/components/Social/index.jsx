import React from 'react'
import './style.css'
import { Menu, Bot, BarChart3, Layers, MessageCircle, Bookmark, X, MessageSquare,Twitter } from 'lucide-react';


function Social() {
    // const
    return(
         <div className='social-head'>
            <div className='social-container'>
                 <div className='social tel'>
                    <Bot className="social-icon" />
                    <p className='social-cont'>Bot</p>             
                </div> 
                <div className='social not'>
                    <Bookmark className="social-icon" />
                     <p className='social-cont'>Notion</p>    
                </div> 
                <div className='social x'>
                    <Twitter className="social-icon" />
                     <p className='social-cont'>Twitter(X)</p>    
                </div> 
                <div className='social dis'>
                    <MessageCircle className="social-icon" />
                     <p className='social-cont'>Discord</p>    
                </div> 

            </div>
        </div>


    )
}
export default Social