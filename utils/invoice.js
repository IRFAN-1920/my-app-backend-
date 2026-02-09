const PDFDocument = require("pdfkit");
const fs = require("fs");

module.exports = (order) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(`invoice-${order._id}.pdf`));

  doc.fontSize(18).text("Habeebi Snacks Invoice");
  doc.text(`Order ID: ${order._id}`);
  doc.text(`Amount: ₹${order.totalAmount}`);

  order.items.forEach(i => {
    doc.text(`${i.name} x ${i.qty} = ₹${i.price}`);
  });

  doc.end();
};
