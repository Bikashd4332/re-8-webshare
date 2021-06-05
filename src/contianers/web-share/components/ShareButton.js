import React from 'react';
import { ReactComponent as ShareIcon } from  '../../../icons/share.svg';
import { ReactComponent as DownloadIcon } from  '../../../icons/download.svg';
import html2pdf from 'html2pdf.js'


const documentAction = ({ elementId, share = false }) => {
  //get an handle of the element first.
  const docElement = document.getElementById(elementId);

  if (!docElement) return console.error("Given document id not found in DOM");
  const opt = {
    margin:       1,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  const worker = html2pdf().from(docElement).set(opt);

  // New Promise-based usage:
  if ( share ) {
    return worker.outputPdf().then(pdf => shareDocument(pdf));
  }
  worker.save();
}

const shareDocument = (blob) => {
  const files = [new File([ blob ], 'resident-evil.pdf', { type: "application/pdf" })];
  const title = 'Resident Evil vilage boss stats';
  const text = 'All the bosses of resident evil and their statistics.';
  const url = "https://en.wikipedia.org/wiki/Resident_Evil";

  if (navigator &&  navigator?.canShare && navigator.canShare({ files })) {
    return navigator.share({
        files,
        title,
        text,
        url,
    }).catch(error => alert(error));
  }
  console.error("Sharability support does not exist! Can't share document!")
}


export const ShareButton = ({ children, elementId }) => (

  <button
    className="bg-blue-100 p-4 rounded-full"
    title="Share pdf"
    onClick={() => documentAction({ elementId, share: true })}
  >
      <ShareIcon width={30} height={30}/>
    </button>
);

export const DownloadButton = ({ children, elementId }) => (
  <button
    className="bg-blue-100 p-4 rounded-full"
    title="Download pdf"
    onClick={() => documentAction({ elementId })}
  >
      <DownloadIcon width={30} height={30}/>
    </button>
);

export default ShareButton;
