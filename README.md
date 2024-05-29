# NotaBene

NotaBene is a simple note taking app that allows a user to create, read, update, and delete short notes with optional titles.
I used Angular/TypeScript with Tailwind CSS to build this frontend project with JSON server to simulate backend functionality.
N.B., ;) This project is a work in progress. Next steps include more styling and adding users to the data schema along with authorization and validation to the app's logic.

## View Demo

To view a video demo of the application, click the following link: https://drive.google.com/file/d/1TmT39JTR42Gvh0JJFIar_8cGOAkPaJSn/view?usp=sharing.

## To Test

## Setup

1. Clone this repository on your local machine.
2. Navigate to the main project directory in your terminal.
3. Run `json-server database.json -p 8088 -w`.
4. Open a new terminal window and navigate to the main project directory.
5. In the new terminal window, run `ng serve --open`.
6. A tab should open in your browser and navigate to `http://localhost:4200/`, the app home page. The previously-created notes should be displayed on the screen. This screen can be accessed at any time by clicking `My Notes` in the NavBar.

## Add a Note

7. To create a new note, click `New Note` in the NavBar. The browser will navigate to a form for adding a new note.
8. Enter the text of the new note and (optionally) a title. A note can be added without a title, but the `Submit` button will not work unless a note's text is entered in the designated box.
9. To reset the form, click the `Reset` button.
10. Click `Submit` to add the new note. The browser will navigate back to the Home/My Notes page.

## Edit a Note

11. Click the pencil-and-ruler icon for a note to edit the note. The browser will navigate to the form for editing the note, with the current title (if present) and text of the note populated in the form.
12. Change the title and/or text of the note and then click `Update Note` to save your changes, but remember that the note must have a text in order for the button to work.
13. If you decide not to edit the note, you can click the `Cancel` button to navigate back to the Home/My Notes page.

## Delete a Note

14. To delete a note, click the trash-can icon for the note. The note will be deleted and will disappear from the screen.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
