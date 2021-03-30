/**
 * Custom Element - Canvas 
 * @author CLIENTXCMS
 * @date 26-02-21
 * 
 * @property {Object} labels
 * @property {Object} set
 * @property {Object} backgrounds
 * @property {String} type
 * @exemple <canvas is="custom-canvas" data-labels='LabelsJson' title="Title" data-type="line" data-set='DataJson' data-backgrounds='BgJson'></canvas>
 * @requires Chart
 */
class CustomCanvas extends HTMLCanvasElement {

    connectedCallback() {
        this.addStyle()
        this.labels = this.hasData('labels', true)
        this.set = this.hasData('set', true)
        this.backgrounds = this.hasData('backgrounds', true)
        this.type = this.hasData('type', false, "pie")

        this.makeChart()
    }

    addStyle() {
        this.style.minHeight = "250px";
        this.style.height = "250px";
        this.style.maxHeight = "250px";
        this.style.maxWidth = "100%";
    }

    makeChart() {
        const data = {
            labels: this.labels,
            datasets: [{
                data: this.set,
                label: this.title,

                backgroundColor: this.backgrounds,
            }],
        }
        new Chart(this, {
            type: this.type,
            data: data,
            options: {
                maintainAspectRatio: false,
                responsive: true,

            }
        }
        )
    }

    hasData(keyName, json = false, defaultValue = {}) {
        if (this.dataset[keyName] !== undefined) {
            if (json == false) {
                return this.dataset[keyName]
            }
            return JSON.parse(this.dataset[keyName])

        }
        return defaultValue
    }
}

customElements.define("custom-canvas", CustomCanvas, { extends: 'canvas' })