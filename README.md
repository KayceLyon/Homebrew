# Homebrew
A CRUD app for creating homebrew elements in D&amp;D 5e.

This site can be found [here](https://homebrew-checker.herokuapp.com/).

Technologies Used: Heroku, MongoDB, Express/Node.js, Mongoose, Foundations (Styling).

Approach: The schemas were created based on XML files on [GitHub](https://github.com/kinkofer/FightClub5eXML).  The forms were based off of the Homebrew Collections portion of [D&amp;D Beyond](https://www.dndbeyond.com/my-collection). I started with the spell schema since it was the most complex, and created the new form to match the parameters available in the XML files.

Notes to Self: Implement XML parser to read XML files into database. Create checker to compare quantifiable elements based on user-requested parameters.

Stretch goals: Implement the ability for users to create character sheets, fixed or random encounters, and campaigns.