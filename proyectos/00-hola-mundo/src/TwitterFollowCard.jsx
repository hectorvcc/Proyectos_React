export function TwitterFollowCard ({userName,name,isFollowing}) {
//const imageSrc=`https://unavatar.io/${userName}`

    return (

<article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt="El avatar de miudev"
          src=" https://unavatar.io/${userName}" />
        <div>
          <strong> Miguel Ángel Durán </strong>
          <span
            className='tw-followCard-infoUserName'>@midudev
          </span>
        </div>
      </header>

      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>


  )
}