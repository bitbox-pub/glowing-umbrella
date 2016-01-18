System.import('github:bitbox-pub/bitbox')
    .then(m => {
        window.bit = m.bit
        window.box = m.box
        window.pub = m.pub
        bootstrap()
    })

function bootstrap() {

	/** edit.box */
    var edit = box(function() {
        return box('input', {
            on: { input: e => pub(this, 'name', e.target.value) },
            attrs: { value: this.name }
        })
    })

	/** boxy.box */
    var boxy = box(function(props) {
        return box('boxy', [
            box('h1', 'Hello ' + this.name),
            edit.call(this)
        ])
    }, {
        name: 'World'
    })

	/** bit box to document body */
    app = new bit(boxy, document.body)

	/** publish changes */
    pub(app, 'name', 'Scooby Doo')

}
