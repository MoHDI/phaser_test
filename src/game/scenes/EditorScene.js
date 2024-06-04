
// You can write more code here

/* START OF COMPILED CODE */

export default class EditorScene extends Phaser.Scene {

	constructor() {
		super("EditorScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// triangle_1
		const triangle_1 = this.add.triangle(390, 286, 0, 128, 64, 0, 128, 128);
		triangle_1.isFilled = true;

		// sprite_1
		this.add.sprite(234, 363, "head");

		// image_1
		const image_1 = this.add.image(571, 363, "head");

		this.image_1 = image_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	image_1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
