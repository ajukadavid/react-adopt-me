

const Pet = ({name, animal, breed, images, location, id}) => {
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h3>{props.breed}</h3>

        </div>
    )
}

export default Pet