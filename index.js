function newImage (sourcePath, left, bottom) {
    let placeholder = document.createElement('img')
    placeholder.src = sourcePath
    placeholder.style.position = 'fixed'
    placeholder.style.left = left
    placeholder.style.bottom = bottom
    document.body.append(placeholder)
    return placeholder
}

function newItem (sourcePath, left, bottom) {
    let placeholder2 = newImage (sourcePath, left, bottom)

    placeholder2.addEventListener('dblclick', function(){
        placeholder2.remove()
    })
}

newImage ('assets/green-character.gif', '100px', '100px')
newImage ('assets/pine-tree.png', '450px', '200px')
newImage ('assets/tree.png', '200px', '300px')
newImage ('assets/pillar.png', '350px', '100px')
newImage ('assets/crate.png', '150px', '200px')
newImage ('assets/well.png', '500px', '425px')

newItem ('assets/sword.png', '500px', '405px')
newItem ('assets/shield.png', '165px', '185px')
newItem ('assets/staff.png', '600px', '100px')
