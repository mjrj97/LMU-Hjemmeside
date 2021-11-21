var tableText = "";
var random2 = performance.now();
try {
	readTextFile('../filer/Billeder/Profilbilleder/Bestyrelsen.txt?' + random2);
}
catch (err) {
	
}
var textByLine = tableText.split("\n");
if (textByLine.length > 0) {
	writeManagement();
}

function writeManagement() {
	let members = 0;
	let emptyLine = true;
	
	for (let i = 0; i < textByLine.length;i++) {
		if (textByLine[i].trim() != "" && emptyLine)
		{
			emptyLine = false;
			members++;
		}
		if (textByLine[i].trim() == "" && !emptyLine) {
			emptyLine = true;
		}
	}
	
	let indices = new Array(members + 1);
	indices[members] = textByLine.length;
	emptyLine = true;
	let member = 0;
	let random = performance.now();
	
	for (let i = 0; i < textByLine.length;i++) {
		if (textByLine[i].trim() != "" && emptyLine)
		{
			emptyLine = false;
			indices[member] = i;
			member++;
		}
		if (textByLine[i].trim() == "" && !emptyLine) {
			emptyLine = true;
		}
	}
	
	let width = 1000/members-18*2;
	let height = width / 0.82;
	
	document.write('<table>');
	document.write('<tr>');
	
	//images
	for (let i = 0; i < members; i++) {
		document.write('<th style="width: ' + 1000/members + 'px" class="bestyrelsen">');
		document.write('<img src="../filer/Billeder/Profilbilleder/' + (i+1).toString() + '.png?' + random + '" style="width: ' + width + 'px; height: ' + height + 'px" class="bestyrelsenBillede">');
		document.write('</th>');
	}
	document.write('</tr>');
	document.write('<tr>');
	
	//text
	for (let i = 0; i < members; i++) {
		document.write('<td style="width: ' + 1000/members + 'px" class="bestyrelsenText">');
		for (let j = indices[i]; j < indices[i+1];j++) {
			if (j == indices[i])
				document.write('<b>' + textByLine[j] + '</b>');
			else if (textByLine[j].includes('@'))
				document.write('<a href="mailto:' + textByLine[j] + '" class="link1">' + textByLine[j] + '</a>');
			else
				document.write(textByLine[j]);
				
			if (j < indices[i+1] - 1)
				document.write('</br>');
		}
		document.write('</td>');
	}
	document.write('</tr>');
	document.write('</table>');
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                tableText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}