import { useState } from 'react'
export function TwitterFollowCard({ children, userName="unknow", initialIsFollowing }) {
  

 const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
 /* Es lo mismo que:
  const estate = useState(false)
  const isFollowing = estate[0]
  const setIsFollowing = estate[1]
*/

console.log(initialIsFollowing)
//console.log("[TwitterFollowCard] render with userName: ",userName)
 

const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
  ? 'tw-followCard-button is-following' 
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
    }

  return (

    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt={`El avatar de ${children}`}
          //const imageSrc=`https://unavatar.io/${userName}`
          src={`https://unavatar.io/${userName}`} /> 
        <div className='tw-followCard-info'>
          <span> {children} </span>

          <span
            className='tw-followCard-infoUserName'>@{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'> {text} </span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir

          </span>
        </button>
      </aside>
    </article>


  )
}