function CharacterCard(props) {

  return <div className="character-card">
    <h2>{ props.character.name }</h2>
    <img
      onClick={ () => console.log('been clicked') }
      src={ props.character.image }
      alt={ props.character.name }
    />
  </div>
}

export default CharacterCard;