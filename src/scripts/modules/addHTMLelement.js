module.exports.addHTMLelement = function(
  newElementTag,
  parentElement,
  textContent,
  arrayOfClasses
) {
  let newElement = document.createElement(newElementTag);
  newElement.textContent = textContent;
  if (arrayOfClasses) newElement.classList.add(...arrayOfClasses);
  return parentElement.appendChild(newElement);
};
