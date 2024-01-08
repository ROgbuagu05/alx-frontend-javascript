export default function getStudentIdsSum(sumId) {
  return sumId.reduce((acc, current) => acc + current.id, 0);
}
