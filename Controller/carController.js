const Data_of_car = require("../model/CarSchema");

//get
const getdataa = async (req, res) => {
  try {
    console.log("Data is coming");
    const data = await res.send("Getting Data");
  } catch (error) {
    res.status(500).json({ error: "Error is occured" });
  }
};

//post
const postData = async (req, res) => {
  try {
    const { name, color, price, number } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "name required",
      });
    }

    if (!color) {
      return res.status(400).json({
        success: false,
        message: "color required",
      });
    }

    if (!price) {
      return res.status(400).json({
        success: false,
        message: "price required",
      });
    }

    if (!number) {
      return res.status(400).json({
        success: false,
        message: "Number required",
      });
    }

    let image = null;

    if (req.file) {
      image = req.file.filename;
      console.log(image);
    } else {
      return res.status(400).json({
        success: false,
        message: "Image required",
      });
    }

    // create new data for record
    const new_data = new Data_of_car({
      name,
      color,
      price,
      number,
      image: image,
    });
    console.log(new_data);

    await new_data.save();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error message",
      error_message: error.message,
    });
  }
};

//get all user
const gettAllData = async (req, res) => {
  try {
    const totalData = await Data_of_car.find();
    if (!totalData) {
      return res.status(400).json({
        success: false,
        message: "data not found",
      });
    }
    console.log("All data fetched");
    return res.status(200).json({
      success: true,
      message: "all userData",
      allUser: totalData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error message",
      error_message: error.error_message,
    });
  }
};

// get individual data
const getSingleData = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id required",
      });
    }

    const user = await Data_of_car.findOne();
    console.log("Single data get successfully");
    res.status(200).json({
      success: true,
      message: "user data",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update data
const updateData = async (req, res) => {
  try {
    const id = req.params.id;
    // const data = req.body;
    // console.log(data);

    const response = await Data_of_car.findByIdAndUpdate(
      id,
      { color: "yellow" },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }

    console.log("Data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(505).json({ error: " Error hai bhai" });
  }
};

//deleteData
const deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Ye id nii mila",
      });
    }
    const response = await Data_of_car.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Response not found",
      });
    }
    console.log("data deleted");
    res.status(200).json({
      success: true,
      message: "data deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(505).json({ error: " Error hai bhai" });
  }
};

module.exports = {
  getdataa,
  postData,
  gettAllData,
  getSingleData,
  updateData,
  deleteData,
};
