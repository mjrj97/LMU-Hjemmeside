var year = new Date().getFullYear();
var yearText = '';
	
if (week < 29){
	yearText = (year-1).toString().substring(2,5) + '/' + year.toString().substring(2,5);
}
else {
	yearText = year.toString().substring(2,5) + '/' + (year+1).toString().substring(2,5);
}

var text = '../filer/Bibelstudie/';
text += yearText.replace('/', '-') + '.txt';

var tableText = "";
try {
	readTextFile(text);
	if (tableText.length > 0)
		writeTable();
	else
		document.write('<p style="font-family:Arvo; font-size: 14px;">Grupperne er ikke tilgængelige lige nu.</p>');
}
catch(err) {
	document.write('<p style="font-family:Arvo; font-size: 14px;">Grupperne er ikke tilgængelige lige nu.</p>');
}

function readTextFile(file){
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

function writeTable()
{
	document.write('<table class="table" style="width:504px; border-style: none;"><tr>');
	
	var textByLine = tableText.split("\n");
	
	let maxGruppe = 0;
	let emptyLine = true;
	
	for (let i = 0; i < textByLine.length;i++) {
		if (textByLine[i].trim() != "" && emptyLine)
		{
			emptyLine = false;
			maxGruppe++;
		}
		if (textByLine[i].trim() == "" && !emptyLine) {
			emptyLine = true;
		}
	}
	
	let indices = new Array(maxGruppe + 1);
	indices[maxGruppe] = textByLine.length;
	emptyLine = true;
	maxGruppe = 0;
	let random = performance.now();
	
	for (let i = 0; i < textByLine.length;i++) {
		if (textByLine[i].trim() != "" && emptyLine)
		{
			emptyLine = false;
			indices[maxGruppe] = i;
			maxGruppe++;
		}
		if (textByLine[i].trim() == "" && !emptyLine) {
			emptyLine = true;
		}
	}
	
	for (let i = 0; i < indices.length - 1; i++) {
		document.write('<th class="th" style="width:' + (504/maxGruppe).toString() + 'px">' + textByLine[indices[i]] + '</th>');
	}
	
	document.write('</tr>');
	document.write('<tr>');
	
	if (indices.length > 0) {
		for (let i = 0; i < indices.length - 1; i++) {
			document.write('<td class="td">');
			for (let j = 0; j < textByLine.length; j++) {
				if (j < indices[i+1] && j > indices[i])
				{
					if (textByLine[j].trim() != "")
						document.write(textByLine[j] + '</br>');
				}
			}
			document.write('</td>');
		}
	}
	
	document.write('</tr>');
	document.write('</table>');
	
	document.write('<p style="font-family:Arvo; font-size: 14px;">Grupperne i skoleåret ' + yearText + '</p>');
}

function containsNumber(s) {
	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) >= '0' && s.charAt(i) <= '9')
		{
			return true;
		}
	}
}