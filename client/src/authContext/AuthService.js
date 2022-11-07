
export function formatError(errorResponse) {
  switch(errorResponse.message) {
        case "Wrong password or email":
            return 'Wrong password or email';
            default:
                return '';
  }
}
