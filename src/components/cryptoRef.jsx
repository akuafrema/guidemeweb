import { useState } from 'react';
import { Search, Lock, Key, Shield, Hash, FileKey, ChevronDown, ChevronRight, Globe } from 'lucide-react';

export default function CryptoReference() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const referenceData = [
    {
      id: 'symmetric',
      title: 'Symmetric Encryption',
      icon: Lock,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'AES (Advanced Encryption Standard)',
          description: 'Most widely used symmetric encryption algorithm with 128, 192, or 256-bit keys',
          details: 'Block cipher operating on 128-bit blocks. Used in: SSL/TLS, file encryption, disk encryption',
          keySize: '128, 192, or 256 bits',
          example: 'AES-256-GCM for authenticated encryption'
        },
        {
          name: 'DES (Data Encryption Standard)',
          description: 'Legacy symmetric cipher, now considered insecure due to small key size',
          details: '56-bit key size makes it vulnerable to brute force attacks',
          keySize: '56 bits (deprecated)',
          example: 'Replaced by 3DES and AES'
        },
        {
          name: '3DES (Triple DES)',
          description: 'Applies DES three times with different keys for increased security',
          details: 'More secure than DES but slower than AES. Being phased out',
          keySize: '168 bits (effective 112 bits)',
          example: 'Legacy systems and payment processing'
        },
        {
          name: 'ChaCha20',
          description: 'Modern stream cipher, faster than AES in software implementations',
          details: 'Used in TLS, mobile encryption. Paired with Poly1305 for authentication',
          keySize: '256 bits',
          example: 'ChaCha20-Poly1305 AEAD'
        },
        {
          name: 'Blowfish',
          description: 'Fast block cipher with variable key length, predecessor to Twofish',
          details: '64-bit blocks, key size 32-448 bits. Used in password hashing (bcrypt)',
          keySize: '32-448 bits',
          example: 'bcrypt password hashing'
        }
      ]
    },
    {
      id: 'asymmetric',
      title: 'Asymmetric Encryption (Public Key)',
      icon: Key,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: 'RSA (Rivest-Shamir-Adleman)',
          description: 'Most widely used public key cryptosystem for encryption and digital signatures',
          details: 'Based on factorization of large primes. Recommended minimum 2048 bits',
          keySize: '2048, 3072, or 4096 bits',
          example: 'SSL/TLS certificates, SSH keys, PGP'
        },
        {
          name: 'ECC (Elliptic Curve Cryptography)',
          description: 'Provides equivalent security to RSA with much smaller key sizes',
          details: 'More efficient than RSA. Used in mobile and IoT devices',
          keySize: '256-384 bits (equivalent to 3072-7680 bit RSA)',
          example: 'Bitcoin, TLS 1.3, modern certificates'
        },
        {
          name: 'Diffie-Hellman',
          description: 'Key exchange protocol allowing two parties to establish shared secret',
          details: 'Basis for forward secrecy in TLS. Vulnerable to MITM without authentication',
          keySize: '2048+ bits',
          example: 'TLS key exchange, VPN protocols'
        },
        {
          name: 'DSA (Digital Signature Algorithm)',
          description: 'Federal standard for digital signatures, now largely replaced by ECDSA',
          details: 'Used for authentication and integrity verification',
          keySize: '1024-3072 bits',
          example: 'SSH keys, software signing (legacy)'
        },
        {
          name: 'Ed25519',
          description: 'Modern elliptic curve signature scheme, fast and secure',
          details: 'EdDSA signature using Curve25519. Deterministic signatures',
          keySize: '256 bits',
          example: 'SSH keys, cryptocurrency, Signal protocol'
        }
      ]
    },
    {
      id: 'hashing',
      title: 'Hash Functions',
      icon: Hash,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'SHA-256',
          description: 'Part of SHA-2 family, produces 256-bit hash values',
          details: 'Cryptographically secure, widely used for integrity verification',
          keySize: '256-bit output',
          example: 'Bitcoin mining, file integrity, certificates'
        },
        {
          name: 'SHA-512',
          description: 'Stronger variant of SHA-2 with 512-bit output',
          details: 'More secure than SHA-256 but slower on 32-bit systems',
          keySize: '512-bit output',
          example: 'High-security applications, checksums'
        },
        {
          name: 'SHA-3 (Keccak)',
          description: 'Latest SHA standard, different construction from SHA-2',
          details: 'Sponge construction, resistant to length extension attacks',
          keySize: '224, 256, 384, or 512-bit output',
          example: 'Future-proof hashing, Ethereum'
        },
        {
          name: 'MD5',
          description: 'Legacy hash function, cryptographically broken, do not use for security',
          details: 'Collision attacks possible. Only use for non-security checksums',
          keySize: '128-bit output (insecure)',
          example: 'File integrity checks only (non-security)'
        },
        {
          name: 'bcrypt',
          description: 'Password hashing function based on Blowfish, includes salt',
          details: 'Adaptive function with configurable work factor. Industry standard',
          keySize: 'Variable with cost factor',
          example: 'Password storage, authentication systems'
        },
        {
          name: 'Argon2',
          description: 'Winner of Password Hashing Competition, resistant to GPU/ASIC attacks',
          details: 'Memory-hard function. Three variants: Argon2d, Argon2i, Argon2id',
          keySize: 'Configurable output',
          example: 'Modern password hashing, key derivation'
        }
      ]
    },
    {
      id: 'encoding',
      title: 'Encoding & Formats',
      icon: FileKey,
      color: 'from-orange-500 to-orange-600',
      items: [
        {
          name: 'Base64',
          description: 'Encodes binary data as ASCII text using 64 characters',
          details: 'NOT encryption. Used to transport binary data over text protocols',
          keySize: 'N/A (encoding)',
          example: 'Email attachments, data URIs, JWT tokens'
        },
        {
          name: 'Hexadecimal',
          description: 'Represents binary data using 16 characters (0-9, A-F)',
          details: 'Two hex digits per byte. Human-readable representation',
          keySize: 'N/A (encoding)',
          example: 'Hash outputs, MAC addresses, color codes'
        },
        {
          name: 'PEM (Privacy Enhanced Mail)',
          description: 'Base64 encoded DER with header/footer, used for certificates and keys',
          details: 'Text format: -----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----',
          keySize: 'N/A (container format)',
          example: 'SSL certificates, RSA keys, CSRs'
        },
        {
          name: 'DER (Distinguished Encoding Rules)',
          description: 'Binary format for ASN.1 encoded data structures',
          details: 'More compact than PEM but not human-readable',
          keySize: 'N/A (container format)',
          example: 'X.509 certificates, PKCS standards'
        },
        {
          name: 'JWT (JSON Web Token)',
          description: 'Base64-encoded JSON for transmitting claims between parties',
          details: 'Three parts: header.payload.signature. Used for authentication',
          keySize: 'Variable',
          example: 'OAuth 2.0, API authentication, SSO'
        }
      ]
    },
    {
      id: 'protocols',
      title: 'Cryptographic Protocols',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      items: [
        {
          name: 'TLS 1.3',
          description: 'Latest Transport Layer Security protocol for secure communication',
          details: 'Faster handshake, removed weak ciphers, perfect forward secrecy mandatory',
          keySize: 'Variable (depends on cipher suite)',
          example: 'HTTPS, secure email, VPNs'
        },
        {
          name: 'SSL (Deprecated)',
          description: 'Predecessor to TLS, all versions are now deprecated and insecure',
          details: 'SSLv2, SSLv3 have known vulnerabilities. Use TLS 1.2 or 1.3',
          keySize: 'N/A (deprecated)',
          example: 'Legacy systems only (upgrade to TLS)'
        },
        {
          name: 'IPSec',
          description: 'Protocol suite for securing IP communications at network layer',
          details: 'Two modes: Transport (payload only) and Tunnel (entire packet)',
          keySize: 'Variable',
          example: 'VPNs, site-to-site connections'
        },
        {
          name: 'SSH (Secure Shell)',
          description: 'Cryptographic network protocol for secure remote access',
          details: 'Uses public key authentication, supports various ciphers',
          keySize: '2048+ bits RSA or 256 bits Ed25519',
          example: 'Remote server access, SFTP, port forwarding'
        },
        {
          name: 'PGP/GPG',
          description: 'Pretty Good Privacy - encryption for email and file encryption',
          details: 'Hybrid encryption: RSA for key exchange, symmetric for data',
          keySize: '2048-4096 bits',
          example: 'Email encryption, file signing, secure messaging'
        }
      ]
    },
    {
      id: 'concepts',
      title: 'Key Concepts',
      icon: Globe,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        {
          name: 'Salt',
          description: 'Random data added to passwords before hashing to prevent rainbow table attacks',
          details: 'Unique salt per password. Stored alongside hash',
          keySize: '128+ bits recommended',
          example: 'Password storage: hash(password + salt)'
        },
        {
          name: 'IV (Initialization Vector)',
          description: 'Random value used with encryption algorithms to ensure different ciphertexts',
          details: 'Should be unique per encryption operation. Not secret, but must be random',
          keySize: 'Block size (typically 128 bits)',
          example: 'AES-CBC mode encryption'
        },
        {
          name: 'HMAC',
          description: 'Hash-based Message Authentication Code for verifying integrity and authenticity',
          details: 'Combines hash function with secret key. Prevents tampering',
          keySize: 'Hash output size',
          example: 'API request signing, JWT signatures'
        },
        {
          name: 'Digital Certificate',
          description: 'Electronic document binding public key to identity, signed by CA',
          details: 'X.509 format. Contains public key, subject info, issuer, validity period',
          keySize: 'Variable',
          example: 'SSL/TLS certificates, code signing'
        },
        {
          name: 'PKI (Public Key Infrastructure)',
          description: 'Framework for managing digital certificates and public-key encryption',
          details: 'Includes CAs, RAs, certificate repositories, validation services',
          keySize: 'N/A (framework)',
          example: 'Enterprise certificate management, trust chains'
        },
        {
          name: 'Perfect Forward Secrecy',
          description: 'Ensures session keys are not compromised if long-term keys are compromised',
          details: 'Uses ephemeral key exchange (DHE, ECDHE)',
          keySize: 'N/A (property)',
          example: 'TLS 1.3, Signal protocol'
        }
      ]
    }
  ];

  const filteredData = referenceData.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Shield size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cryptography Reference
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
              Comprehensive guide to encryption algorithms, hash functions, protocols, and cryptographic concepts
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search algorithms, protocols, or concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-slate-300 shadow-2xl"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Reference Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {filteredData.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections.has(section.id);
            
            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      <p className="text-sm text-gray-600 mt-1">{section.items.length} items</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="text-gray-400" size={24} />
                  ) : (
                    <ChevronRight className="text-gray-400" size={24} />
                  )}
                </button>

                {/* Section Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200">
                    <div className="p-6 space-y-6">
                      {section.items.map((item, index) => (
                        <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-slate-500 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {item.keySize}
                            </span>
                          </div>
                          <p className="text-gray-700 font-medium mb-2">{item.description}</p>
                          <p className="text-gray-600 text-sm mb-3">{item.details}</p>
                          
                          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                            <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Common Use Cases</p>
                            <p className="text-sm text-slate-700">{item.example}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No results found
            </h3>
            <p className="text-gray-500 mb-6">
              Try a different search term
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-6 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Quick Reference Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Security Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Lock className="text-slate-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use Strong Algorithms</h3>
              <p className="text-gray-600 text-sm">
                Always use AES-256, RSA-2048+, SHA-256+. Avoid MD5, SHA-1, and weak ciphers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Key className="text-slate-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Key Management</h3>
              <p className="text-gray-600 text-sm">
                Rotate keys regularly. Store securely. Use key derivation functions for passwords.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Shield className="text-slate-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm">
                Keep libraries current. Monitor vulnerabilities. Deprecate weak algorithms promptly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}