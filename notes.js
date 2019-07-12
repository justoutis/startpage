function check_web_storage_support() {
  if (typeof(Storage) !== "undefined") {
    return (true);
  } else {
    alert("Web storage unsupported!");
    return (false);
  }
}

function display_saved_note() {
  if (check_web_storage_support() == true) {
    result = localStorage.getItem('note');
  }
  if (result == null) {
    result = "no notes saved.";
  }
  document.getElementById("notetest").value = result;
}

function wipe() {
  document.getElementById("notetest").value = " ";
}

function save() {
  if (check_web_storage_support() == true) {
    var area = document.getElementById("notetest");
    if (area.value != '') {
      localStorage.setItem("note", notetest.value);
    } else {
      alert("nothing to save.");
    }
  }
}
