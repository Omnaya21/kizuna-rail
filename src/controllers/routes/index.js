import { bookingPage, processBookingRequest } from './route-book.js';
import confirmationPage from './route-confirm.js';
import listRoutesPage from './route-list.js';
import routeDetailsPage from './route-detail.js';
import { Router } from 'express';

const router = Router();

// List all routes
router.get('/', listRoutesPage);

// Route details page
router.get('/:routeId', routeDetailsPage);

// Book ticket
router.get('/booking/:scheduleId', bookingPage);
router.post('/book', processBookingRequest);

// Booking confirmation page
router.get('/confirmation/:confirmationId', confirmationPage);

export default router;
