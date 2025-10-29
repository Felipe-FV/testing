document.getElementById("gerar").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const matricula = document.getElementById("matricula").value;

  if (!nome || !idade || !matricula) {
    alert("Preencha todos os campos!");
    return;
  }

  // Usando jsPDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Ficha de Cadastro", 20, 20);

  doc.setFontSize(14);
  doc.text(`Nome: ${nome}`, 20, 40);
  doc.text(`Idade: ${idade}`, 20, 50);
  doc.text(`Matrícula: ${matricula}`, 20, 60);

  // Salvar arquivo
  doc.save(`${nome}_cadastro.pdf`);
});
