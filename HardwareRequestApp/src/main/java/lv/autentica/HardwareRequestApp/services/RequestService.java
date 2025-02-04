package lv.autentica.HardwareRequestApp.services;

import lv.autentica.HardwareRequestApp.models.Request;
import lv.autentica.HardwareRequestApp.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class RequestService {
    @Autowired
    private RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request getRequestById(Long id) {
        return requestRepository.findById(id).orElse(null);
    }

    @Transactional
    public Request save(Request request) {
        return requestRepository.save(request);
    }
}
