
export const cvUpload = (req, res) => {
    if (req.file) {
        console.log(req.file); // You might want to do something with the file
        res.send("CV upload success");
    } else {
        res.status(400).send("No file uploaded.");
    }
};

export const imageUpload = (req, res) => {
    if (req.file) {
        console.log(req.file); // You might want to do something with the file
        res.send("Image upload success");
    } else {
        res.status(400).send("No Image uploaded.");
    }
};


