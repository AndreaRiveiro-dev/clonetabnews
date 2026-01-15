function status(request, response) {
  response.status(200).json({ valor: "Confirmado!!" });
}

export default status;
