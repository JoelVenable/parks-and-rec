module.exports.addHTMLelement = function(
  newTag,
  parentElement,
  textContent,
  classes
) {
  let newElement = document.createElement(newTag);
  newElement.textContent = textContent;
  if (classes) newElement.classList.add(...classes);
  return parentElement.appendChild(newElement);
};
