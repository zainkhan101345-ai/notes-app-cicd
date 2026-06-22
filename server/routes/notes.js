const router = require("express").Router();
const Note = require("../models/Note");

// GET all notes
router.get("/", async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
    console.log("Get req",notes)

  res.json(notes);
});

// CREATE note
router.post("/", async (req, res) => {
    console.log("post req",req.body)

  const note = await Note.create(req.body);
  res.json(note);
});


router.delete("/:id", async (req, res) => {
  try {
    console.log("Deletinggg",req.params.id)
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.json({
      message: "Note deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;